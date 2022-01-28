/**
 * @param {string} s
 * @return {string}
 */
 /* 
 Given a string s, return the longest palindromic substring in s.
 Example 1:
 Input: s = "babad"
 Output: "bab"
 Explanation: "aba" is also a valid answer.
 Example 2:
 Input: s = "cbbd"
 Output: "bb"
 Constraints:
 1 <= s.length <= 1000
 s consist of only digits and English letters. 
 
 https://leetcode.com/problems/longest-palindromic-substring/
 */ 

// Leetcode test gives time limit problem

function isPalindrome(p){
    const reversed=p.split("").reverse().join("");
    const palindromic= p===reversed ? true : false;
    return palindromic;
}
let nStr="";
function divideArr(s,n){
    let len=s.length;
    const sArr=s.split("");
    for(let i=0; i<len-n+1; i++){
        let nArr=sArr.slice(i,i+n);
        nStr=nArr.join("");
        //console.log(nStr);
        if(isPalindrome(nStr)===true){
            return true;
            break;
        }
    }
    return "no palindrome";
}

function longestPalindrome(str){
    let len=str.length;

    for(let i=len;i>=0;i--){
        if(divideArr(str,i)===true){
            break;
        }
    }
    return nStr;
}



console.log(longestPalindrome("civilwartestinggnitswhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));