function friend(friends){

    let myFriend = [];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length == 4){
            myFriend.push(friends[i]);
        }
    }

    return myFriend;
    //your code here
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));