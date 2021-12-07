/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
}
.tablinks-right p{
    /**text-align: right;**/
    float: right;

}
/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
    background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 90px solid #ccc;
    border-top: none;
    border-color: #ccc;
}

.flex-parent{
    display:flex;
    flex-direction: row;

}
/**left flex column**/
.flex-child-1{
    width: 10%;
    padding: 30px;
    height: block;
    border: dimgrey solid 5px;
    /**margin: 50px;**/
}
/**right flex colum**/
.flex-child-2{
    width: 60%;
    height: block;
    background-color: green;
    text-align: center;
    color: white;
}
.flex-child-3{
    width: 30%;
    height: block;
    background-color: green;
    text-align: center;
    color: white;
    border: dimgrey solid 5px;
}
.flex-bastard-grandchild-verdamte-scheisse-1{
    float: top;
    background-color: yellow;
    text-align: center;
    text:wrap;
    color: mediumvioletred;
    border: dimgrey solid 5px;
    solid 5px;
}
.flex-bastard-grandchild-verdamte-scheisse-2{
    float: bottom;
    background-color:cyan;
    text-align: center;
    color: white;
    border: cadetblue solid 5px;
}
.flex-bastard-grandchild-verdamte-scheisse-3{
    float: bottom;
    background-color: darkcyan;
    text-align: center;
    color: white;
    border: cadetblue solid 5px;
}

.tabcontent{
    font-size:50px;
    text-align: center;
    background-color:  #ccc;
}
