let os=document.getElementById('os')
function CLEAR()
{
os.value="";
}
function del()
{
os.value=os.value.slice(0,-1);
}
function display(text)
{
os.value=os.value+text;
}
function calculat()
{
os.value=eval(os.value);
}