function writeCode(language){
    console.log(`Write code in ${language}`);
} 

writeCode('Javascript');
writeCode('C++');
writeCode(); //undefined

////////////////////////////

// to solve the above issue we declared the default value for lang as javascript so if a case arise it doesnt return undefined.

function WriteCode(lang= 'Javascript'){
    console.log(`Write code in ${lang}`);
} 

WriteCode('Javascript');
WriteCode('C++');
WriteCode(); 
