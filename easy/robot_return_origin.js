const judgeCircle = (moves) => {
    let vert = 0;
    let horiz = 0;

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                vert++;
                break;
            case "D":
                vert--;
                break;
            case "L":
                horiz--;
                break;
            case "R":
                horiz++;
                break;
            default:
                break;
        }
    };

    return vert || horiz ? false : true;
};

console.log(judgeCircle("RLUURDDDLU"));