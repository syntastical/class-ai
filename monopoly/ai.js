// The purpose of this AI is not to be a realistic opponent, but to give an example of a valid AI player.
function AITest(p) {
	this.alertList = "";

	// Decide whether to buy a property the AI landed on.
	// Return: boolean (true to buy).
	// Arguments:
	// index: the property's index (0-39).
	this.buyProperty = function(index) {
		console.log("buyProperty");
		let s = square[index];
		return p.money > s.price + 50;
	}

	// Determine the response to an offered trade.
	// Return: boolean/instanceof Trade: a valid Trade object to counter offer (with the AI as the recipient); false to decline; true to accept.
	// Arguments:
	// tradeObj: the proposed trade, an instanceof Trade, has the AI as the recipient.
	this.acceptTrade = function(tradeObj) {
		console.log("acceptTrade");
		let  tradeValue = 0;
		let  money = tradeObj.getMoney();
		let  initiator = tradeObj.getInitiator();
		let  recipient = tradeObj.getRecipient();
		let  property = [];

		tradeValue += 10 * tradeObj.getCommunityChestJailCard();
		tradeValue += 10 * tradeObj.getChanceJailCard();

		tradeValue += money;

		for (let  i = 0; i < 40; i++) {
			property[i] = tradeObj.getProperty(i);
			tradeValue += tradeObj.getProperty(i) * square[i].price * (square[i].mortgage ? 0.5 : 1);
		}

		console.log(tradeValue);

		let  proposedMoney = 25 - tradeValue + money;

		if (tradeValue > 25) {
			return true;
		} else if (tradeValue >= -50 && initiator.money > proposedMoney) {

			return new Trade(initiator, recipient, proposedMoney, property, tradeObj.getCommunityChestJailCard(), tradeObj.getChanceJailCard());
		}

		return false;
	}

	// This function is called at the beginning of the AI's turn, before any dice are rolled. The purpose is to allow the AI to manage property and/or initiate trades.
	// Return: boolean: Must return true if and only if the AI proposed a trade.
	this.beforeTurn = function() {
		console.log("beforeTurn");
		let  s;
		let  allGroupOwned;
		let  max;
		let  leastHouseProperty;
		let  leastHouseNumber;

		// Buy houses.
		for (let  i = 0; i < 40; i++) {
			s = square[i];

			if (s.owner === p.index && s.groupNumber >= 3) {
				max = s.group.length;
				allGroupOwned = true;
				leastHouseNumber = 6; // No property will ever have 6 houses.

				for (let  j = max - 1; j >= 0; j--) {
					if (square[s.group[j]].owner !== p.index) {
						allGroupOwned = false;
						break;
					}

					if (square[s.group[j]].house < leastHouseNumber) {
						leastHouseProperty = square[s.group[j]];
						leastHouseNumber = leastHouseProperty.house;
					}
				}

				if (!allGroupOwned) {
					continue;
				}

				if (p.money > leastHouseProperty.houseprice + 100) {
					buyHouse(leastHouseProperty.index);
				}
			}
		}

		// Unmortgage property
		for (let  i = 39; i >= 0; i--) {
			s = square[i];

			if (s.owner === p.index && s.mortgage && p.money > s.price) {
				unmortgage(i);
			}
		}

		return false;
	}

	let  utilityForRailroadFlag = true; // Don't offer this trade more than once.

	// This function is called every time the AI lands on a square. The purpose is to allow the AI to manage property and/or initiate trades.
	// Return: boolean: Must return true if and only if the AI proposed a trade.
	this.onLand = function() {
		console.log("onLand");
		let  proposedTrade;
		let  property = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let  railroadIndexes = [5, 15, 25, 35];
		let  requestedRailroad;
		let  offeredUtility;
		let  s;

		// If AI owns exactly one utility, try to trade it for a railroad.
		for (let  i = 0; i < 4; i++) {
			s = square[railroadIndexes[i]];

			if (s.owner !== 0 && s.owner !== p.index) {
				requestedRailroad = s.index;
				break;
			}
		}

		if (square[12].owner === p.index && square[28].owner !== p.index) {
			offeredUtility = 12;
		} else if (square[28].owner === p.index && square[12].owner !== p.index) {
			offeredUtility = 28;
		}

		if (utilityForRailroadFlag && game.getDie(1) !== game.getDie(2) && requestedRailroad && offeredUtility) {
			utilityForRailroadFlag = false;
			property[requestedRailroad] = -1;
			property[offeredUtility] = 1;

			proposedTrade = new Trade(p, player[square[requestedRailroad].owner], 0, property, 0, 0)

			game.trade(proposedTrade);
			return true;
		}

		return false;
	}

	// Determine whether to post bail/use get out of jail free card (if in possession).
	// Return: boolean: true to post bail/use card.
	this.postBail = function() {
		console.log("postBail");

		// p.jailroll === 2 on third turn in jail.
		return !!((p.communityChestJailCard || p.chanceJailCard) && p.jailroll === 2);
	}

	// Mortgage enough properties to pay debt.
	// Return: void: don't return anything, just call the functions mortgage()/sellhouse()
	this.payDebt = function() {
		console.log("payDebt");
		for (let  i = 39; i >= 0; i--) {
			s = square[i];

			if (s.owner === p.index && !s.mortgage && s.house === 0) {
				mortgage(i);
				console.log(s.name);
			}

			if (p.money >= 0) {
				return;
			}
		}
	}

	// Determine what to bid during an auction.
	// Return: integer: -1 for exit auction, 0 for pass, a positive value for the bid.
	this.bid = function(property, currentBid) {
		console.log("bid");
		let bid = currentBid + Math.round(Math.random() * 20 + 10);

		if (p.money < bid + 50 || bid > square[property].price * 1.5) {
			return -1;
		} else {
			return bid;
		}
	}
}
