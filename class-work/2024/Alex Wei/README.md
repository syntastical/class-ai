# AI Class

## Got downtime?
https://alf.nu/ReturnTrue?world=true&level=id
if(state[1][1] ==='X' && state [0][0] ==='O' && state [2][2] ==='X' && state [2][0] ==='O'|| state [2][0] ==='X' &&state [2][2] === 'X' && state [2][1] !== 'X' && state [2][1] !== 'O') {
        return [2,0]
     }




     if(state[0][0] ==='X' && state[1][1] !=='O'&& state[1][1] !=='X') {
        return [1,1]
    }

    if(state[0][1] ==='X' && state[1][1] !=='O'&& state[1][1] !=='X') {
        return [1,1]
    }

    if(state[0][2] ==='X' && state[1][1] !=='O'&& state[1][1] !=='X') {
        return [1,1]
    }
    
    if(state[1][0] ==='X' && state[1][1] !=='O'&& state[1][1] !=='X') {
        return [1,1]
    }

    if(state[1][2] ==='X' && state[1][1] !=='O'&& state[1][1] !=='X') {
        return [1,1]
    }
