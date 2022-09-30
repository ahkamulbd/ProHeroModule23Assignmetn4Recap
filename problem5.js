/*
Problem 5: isBestFriend

    তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
*/

function isBestFriend(obj1, obj2) {
    if (obj1.name === obj2.friend && obj2.name === obj1.friend) {
        return true;
    }
    else {
        return false;
    }
}

const objOne = { name: 'Salman', friend: 'Shahrukh' };
const objTwo = { name: 'Shahrukh', friend: 'Salman' };

const requiredResult = isBestFriend(objOne, objTwo);
console.log(requiredResult);