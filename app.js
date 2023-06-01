const search = document.getElementById('search');
const msg = document.getElementById('msg');
const imageName = document.getElementById('imageName');

const inputHandler = function(e)
{
    var str=e.target.value;
    var temp=str.toUpperCase();
    if(temp=="LEKHU")
    {
        imageName.src="Lekhu_.jpg";
        msg.innerHTML='"Count your life by smile, not tears. Count your age by friends, not years. Happy Birthday My Lekhu!"';
    } 
    if(temp=="SWEETHEART")
    {
        imageName.src="Lekhu.jpg";
        msg.innerHTML="Enjoy your special day, sweetheart. Happy birthday! I'm always praying that infinite blessings pour into your life.";
    }
    if(temp=="CUTE")
    {
        imageName.src="Cute.jpg";
        msg.innerHTML="Happy Birthday to a very special girl! May your birthday be as cute and unique as you are, my dear.";
    } 
    if(temp=="APSARA")
    {
        imageName.src="Apsara.jpg";
        msg.innerHTML="I wish your special day brings you lots of happiness, love and fun in every way. happy Birthday Queen!";
    }
    if(temp=="LEKH")
    {
        imageName.src="Lekh.png";
        msg.innerHTML="To my fashionable niece, may your special day be as stylish as you are!";
    } 
    if(temp=="JR LEKHU")
    {
        imageName.src="JR_Lekhu.jpeg";
        msg.innerHTML="Happy Birthday to the most adorable little girl who's as sweet as sugar, congratulations to the parents who are doing a super job of raising such a lil' cutie-pie!";
    }
    if(temp=="STRONG")
    {
        imageName.src="Lekhu_Mom.jpg";
        msg.innerHTML="Happy birthday to the most powerful woman I know! You never give up and always have positive attitude.";
    }
}
search.addEventListener('input',inputHandler);
search.addEventListener('propertychange',inputHandler);
