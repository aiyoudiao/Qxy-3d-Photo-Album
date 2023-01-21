# Qxy-3d-Photo-Album

To the New Year 🧨, give Dabao the whole 3D album 👀. 要过年了🧨，给大宝整个3D相册👀。

## 两种模式

访客模式：用第三方的随机图片网站
专属模式：通过相应key，去解析出原始图片

### 专属模式思路

通过node程序，将原图进行加密及拆解。  
把图片的获取改成ajax、fetch请求，然后转成base64码，最后通过相应的key去二次处理base64码来获得最终图片的base64码。  
把base64码添加到图片标签或者背景样式上。  

加解密原理，插入、左右移动、基本运算，这些加密信息都会记录在key中，没有key，就看不到真正的图片。每次发布，key都不同，只有原始图片的拥有者才能看到真正的图片。

## 优化

添加新的功能，比如背景图，爱心动画，玫瑰花瓣特效。