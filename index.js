function receivesAFunction(callback) {  
    return callback();
};

function returnsANamedFunction(){
    return returnsANamedFunction; 
};

function returnsAnAnonymousFunction(){
  return function(){};
}
