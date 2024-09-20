function message(){
    var name = document.getElementById('name');
    var Email = document.getElementById('Email');
    var msg = document.getElementById('msg');
    var check = document.getElementById('check');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(name.value === '' || Email.value === '' || msg.value === '' || !check.checked)
        {
             danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            name.value = '';
            Email.value = '';
            msg.value = '';
            check.checked = false;
        }, 3000);

        success.style.display = 'block';
    } 
        setTimeout(() => {
            success.style.display = 'none';
            danger.style.display = 'none';

        },3000);


}
