document.getElementsByClassName("main")[0].innerHTML = 
    
`<h3 class="tag">Calculator</h3><br>
<div class="container">
    <div id="screen-container">
        <div id="display"></div>
    </div>
    <div class="buttons">
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-info mt-2" id="one">1</button>
            <button type="button" class="btn btn-info mt-2" id="four">4</button>
            <button type="button" class="btn btn-info mt-2" id="seven">7</button>
            <button type="button" class="btn btn-info mt-2 operator" id="add"> + </button>
            <button type="button" class="btn btn-info mt-2 operator" id="division">/</button>
            
        </div>
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-info mt-2" id="two">2</button>
            <button type="button" class="btn btn-info mt-2" id="five">5</button>
            <button type="button" class="btn btn-info mt-2" id="eight">8</button>
            <button type="button" class="btn btn-info mt-2 operator" id="minus"> - </button>
            <button type="button" class="btn btn-info mt-2 operator" id="open"> ( </button>
            
        </div>
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-info mt-2" id="three">3</button>
            <button type="button" class="btn btn-info mt-2" id="six">6</button>
            <button type="button" class="btn btn-info mt-2" id="nine">9</button>
            <button type="button" class="btn btn-info mt-2 operator" id="multiply">*</button>
            <button type="button" class="btn btn-info mt-2 operator" id="close"> ) </button>
                
        </div>
        <div class="btn-group-vertical">
        <button type="button" class="btn btn-info mt-2 operator" id="modulo">%</button>
        <button type="button" class="btn btn-secondary mt-2 operator btn-width" id="equal"> = </button>
        <button type="button" class="btn btn-light mt-2 operator btn-width" id="clear"> C</button>  
            
            
        </div>
        
    </div>
</div>`;

document.addEventListener("DOMContentLoaded",function(){
let display_text = document.getElementById('display');
console.log(display_text, typeof display_text);
let operation = document.querySelectorAll('.btn-group-vertical button');
let operation_array = Array.from(operation);
operation_array.map(button => button.addEventListener('click',
    function(){
        if(button.innerText !== '=')
        {
            display_text.innerText += button.innerText;
        }
        if(button.innerText === '=')
        {
            display_text.innerText = eval(display_text.innerText);
        }
        if(button.innerText === 'C'){
            display_text.innerText = "";
        }
    }));
});
