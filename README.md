# ng2-mosh

### Property binding

<img `[src]`="imageUrl" />      
<img `bind-src`="imageUrl" />

<hr>

### Class binding

<img `[class.active]`="isActive" >          


<hr>


### Style binding

<button `[style.backgroundColor]`="isActive" ? 'blue' : 'gray' >       

<hr>

### Event binding

<button `(click)`="onClick($event)" >
<button `on-click`="onClick($event)" >

<hr>


### Two-way binding

<input type="text" `[(ngModel)]`="firstName" >
<input type="text" `bindon-ngModel`="firstName" >

<hr>

