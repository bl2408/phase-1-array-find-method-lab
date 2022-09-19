// code your solution here
function superbowlWin(record){
    const found = record.find(el => el.result == "W");
    return found ? found.year : undefined;
}