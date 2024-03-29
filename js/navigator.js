/*
 *  Websites list in order
 */
var websites = [
    "index.html"
];

/*
 *  Website index variables
 */
var currentIndex = 0;
var path = window.location.href; 
var page = path.split("/").pop(); // comment this out for external pages
var currentIndex = websites.indexOf(page);

/*
 *  Goes to the previous page from the index of current page in list
 */
function goToPrevious() {
    currentIndex = (currentIndex - 1 + websites.length) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to the next page from the index of current page in list
 */
function goToNext() {
    currentIndex = (currentIndex + 1) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to random page that is not the current page
 */
function goToRandom() {
    var randomIndex = currentIndex;
    while (randomIndex == currentIndex)
    {
        randomIndex = Math.floor(Math.random() * websites.length);
    }
    currentIndex = randomIndex;
    location.href = websites[currentIndex];
}