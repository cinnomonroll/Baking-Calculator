function convertFlour() {
    const flourType= document.getElementById("flourType").value;
    const amount = document.getElementById('flour-amount').value;
    let convertedValue;

    switch(flourType){
        case 'all-purpose':
            convertedValue = amount * 1;
            break;
        case 'whole-wheat':
            convertedValuse = amount * 1.2;
            break;
        case 'bread':
            convertedValue = amount * 1.3;
            break;
        case 'cake/pastry':
            convertedValue = amount * 0.9;
            break;
        case 'almond':
            convertedValue = amount * 0.5;
            break;
        default:
            convertedValue = 'Please select a flour type';
    }
    document.getElementById('convertedValue').innerHTML = convertedValue;
}