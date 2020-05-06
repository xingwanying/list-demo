# list-demo

## Description

This is a simple album that shows the fox's pictures. The mock API provided 50 pictures in total, which  divided into ten pages.

Test environment:  Chrome  v81.0.4044.129, iphone 8 view

## /index

 After the initing project, open the URL "http://localhost:8080/" or "http://localhost:8080/index" and the home page is as follow: 

![home](https://s1.ax1x.com/2020/05/06/YAa31s.png)

Click Start go to the list page.

## /list

This page initializes the loading of five pictures. Each time the scroll bar slides to the bottom will trigger a request to load another five pictures.

![list](https://s1.ax1x.com/2020/05/06/YAwJoT.png)

Click the star icon on the lower right corner of each picture to mark the photo. Marked pictures will appear at the top of the list and still stays after refreshing the page.

![mark](https://s1.ax1x.com/2020/05/06/YAwTTf.png)

Click the icon on the upper left corner of the marked picture to cancel the mark.

![marked](https://s1.ax1x.com/2020/05/06/YA08cd.png)

Click the back icon on the header to return to the home page.

![back](https://s1.ax1x.com/2020/05/06/YA0ov9.png)

## Testing

Based on Nigthwatch and Chrome. The result is as follow:

![test](https://s1.ax1x.com/2020/05/06/YA0x8e.png)

![result](https://s1.ax1x.com/2020/05/06/YAsjeA.md.png)
