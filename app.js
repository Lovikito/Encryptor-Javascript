function reset(paragraph)
{

    //reset the input text
    document.getElementById('text').value = '';
    //reset the output of the text
    document.getElementById('new-text').textContent = paragraph;
    
}

function checkCharacters(inputText)
{
    if (/[^a-z\s]/g.test(inputText)) 
    {
        alert("Please only use lowercase letters and spaces.");
        return false;
    }

    return true;
}

function createElementAndAppend(parent, elementType, elementId, textContent) 
{
    let newElement = document.createElement(elementType);
    newElement.id = elementId;
    newElement.textContent = textContent;
    parent.appendChild(newElement);
    return newElement;
}

function selectElement(selector) 
{
    return document.querySelector(selector);
}

function removeElement(element) 
{
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function encryptText() {
    //Get the value of the input
    let textarea = selectElement('#text').value;
    //Don't allow Uppercase letters or special characters
    let functionValueEncrypt = checkCharacters(textarea);
    //We need to check if the textare is empy or not to continues with the program
    if (textarea != undefined && textarea != '' && functionValueEncrypt) 
    {
        //Replace the letters that we want to encrypt
        let newText = textarea.replace(/[aeiou]/gi, function(match) 
        {
            switch(match) {
                case 'a':
                    return 'ai';
                case 'e':
                    return 'enter';
                case 'i':
                    return 'imes';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
            }
        });

        //When the encryted text output, we delete the image
        let divimage = selectElement('.containerimg');
        //Check if div-container still exists
        if(divimage) 
        {
            //Remove it
            removeElement(divimage);
            //We need to show the encryted text
            let paragraphtext = selectElement('.little-box')
            //Check if encryted text exist
            if(paragraphtext) 
            {
                // Create a new <p> and <button> element
                let newParagraph = createElementAndAppend(paragraphtext, 'p', 'new-text', newText);
                let newButton = createElementAndAppend(paragraphtext, 'button', 'new-button', 'Copiar');
                //API Clipboard
                newButton.addEventListener('click', function() 
                {
                    navigator.clipboard.writeText(newParagraph.textContent)
                });
            }
        }
        //Reset the input element and reset output encrypted text 
        reset(newText);
    }
}

document.getElementById('button-encrypted').onclick = encryptText;

function unEncryptText()
{
    //Get the value of the input
    let textarea = selectElement('#text').value;
    //Don't allow Uppercase letters or special characters
    let functionValueUncrypt = checkCharacters(textarea);
    //We need to check if the textare is empy or not to continues with the program
    if(textarea != undefined && textarea != '' && functionValueUncrypt)
    {
        //Replace the letters that we want to encrypt
        let originalText =  textarea.replace(/ai/g, 'a')
                                    .replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
        //When the encryted text output, we delete the image
        let divimage = selectElement('.containerimg');
        //Check if div-container still exists
        if(divimage)
        {
            //Remove it
            removeElement(divimage);
            //We need to show the encryted text
            let paragraphtext = selectElement('.little-box');
            //Check if encryted text exist
            if(paragraphtext)
            {
                // Create a new <p> and <button> element
                let originalParagraph = createElementAndAppend(paragraphtext, 'p', 'new-text', originalText);
                let newButton = createElementAndAppend(paragraphtext, 'button', 'new-button', 'Copiar');
                //API Clipboard
                newButton.addEventListener('click', function() 
                {
                    navigator.clipboard.writeText(originalParagraph.textContent);
                });
            }
        }
        //Reset the input element and reset output encrypted text 
        reset(originalText);
    }
}
document.getElementById('button-unencrypted').onclick = unEncryptText;

