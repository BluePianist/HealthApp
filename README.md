# Sri LankApp
> My first React Native application.
> <br> React Native application about Sri Lanka. Help travelers in the country finding restaurants, hotels, activities and hot spots.

<img id="screenshot" src="/Components/Images/Screenshot1.png" height="30%" width="30%" >

## Table of Contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [How it works](#how it works)

## Installation

1. install the dependencies
```sh
npm install
```
2. If you're running on a iOs device don't forget to install Pod in the ios folder
```sh
pod install
```
## Demo
### Dashboard screen
This is the main screen of the app. You can find all the `Views` redirecting to the other components.
<br> For a better render onPress I used `TouchableOpacity` instead of a simple `View`.
<br><br> GIF

### Restaurant component
When the Restaurant View is pressed you are redirected to the Restaurant component. This screen contains a list of restaurants displayed in a `Carousel`. This is the same for the Hotels, Activities and Hot Spots scree.
<br> Below, you can find a list of reviews written by previous users.
<br><br> GIF

### Add a review
You can add a review by touching the + button in the `Carousel`. A `Modal` will appear and you are able to fill the filed and press the Submit button. The `Modal` disappears with a nice animation and your new review is added to the list.
<br><br> GIF

## How it works
### React Navigation
<br> I'm using `react-navigation` to navigate between screens and pass some state in props
