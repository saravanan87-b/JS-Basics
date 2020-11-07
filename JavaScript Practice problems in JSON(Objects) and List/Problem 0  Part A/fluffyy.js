var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}



//1) Adding height and weight to fluffy
cat.height=30
cat.weight=6

//2) Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffyy"

console.log(cat);

//3) List all the activities of Fluffyy’s catFriends.
let FriendsOfFluffyy = cat.catFriends;
console.log(FriendsOfFluffyy);

//4) Print the catFriends names.
let catFriendsName = "";
for(let catFriend of FriendsOfFluffyy){
	catFriendsName+=catFriend.name+",";
}
console.log(catFriendsName);

//5) Print the total weight of catFriends
let totalWeight=0;
for(let catFriend of FriendsOfFluffyy){
	totalWeight+=catFriend.weight;
}
console.log(totalWeight);

//6) Print the total activities of all cats
let totalActivitiesCount = cat.activities.length;
for(let catFriend of FriendsOfFluffyy){
	totalActivitiesCount+=catFriend.activities.length;
}
console.log(totalActivitiesCount);

//7) Add 2 more activities to bar & foo cats
let addActivitiesToBar = ["play","jumping"];
let addActivitiesToFoo = ["running","laying on wall"];
for(let items in addActivitiesToBar){
	cat.catFriends[0].activities.push(addActivitiesToBar[items]);
}
console.log(cat.catFriends[0].activities);
for(let items in addActivitiesToFoo){
	cat.catFriends[1].activities.push(addActivitiesToFoo[items]);
}
console.log(cat.catFriends[1].activities);

//8) Update the fur color of bar
cat.catFriends[0].furcolor="Brown";


// To Display Fluffyy Biography
let fluffyy=`name:${cat.name}
               activities:${cat.activities}
			   weight:${cat.weight}
			   height:${cat.height}`;
			   
var fluffyBio=document.getElementById("fluffyyBiography");
fluffyBio.textContent=fluffyy;


// To Display Fluffyy Friends
var fluffyyFriends=document.getElementById("fluffyyFriends");
fluffyyFriends.textContent=catFriendsName;
	
console.log(cat);