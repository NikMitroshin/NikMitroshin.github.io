var rangeTl = document.getElementById('tlr'),
    rangeTr = document.getElementById('trr'),
    rangeBl = document.getElementById('blr'),
    rangeBr = document.getElementById('brr'),

    resultTl = document.getElementById('result-tlr'),
    resultTr = document.getElementById('result-trr'),
    resultBl = document.getElementById('result-blr'),
    resultBr = document.getElementById('result-brr'),

    rangeSW = document.getElementById('sizeW'),
    rangeSH = document.getElementById('sizeH'),

    resultSW = document.getElementById('result-SW'),
    resultSH = document.getElementById('result-SH'),

    inputRadius = document.querySelectorAll('.input-radius'),
    inputSize = document.querySelectorAll('.input-size'),
    cube = document.getElementById('cube'),

    btnShowRelust = document.getElementById('btn-show-result'),
    btnCopyRelust = document.getElementById('btn-copy-result'),
    textMainResult = document.getElementById('text-result');

    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
    cube.style.width = rangeSW.value + 'px';
    cube.style.height = rangeSH.value + 'px';

function changeRadius() {
    resultTl.innerHTML = rangeTl.value + ' px';
    resultTr.innerHTML = rangeTr.value + ' px';
    resultBl.innerHTML = rangeBl.value + ' px';
    resultBr.innerHTML = rangeBr.value + ' px';
    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
};
function changeSize (){
    resultSW.innerHTML = rangeSW.value + ' px';
    resultSH.innerHTML = rangeSH.value + ' px';
    cube.style.width = rangeSW.value + 'px';
    cube.style.height = rangeSH.value + 'px';
};
for (nodeRadius of inputRadius) {
    nodeRadius.addEventListener ('input',changeRadius);
};
for (nodeSize of inputSize) {
    nodeSize.addEventListener ('input',changeSize);
};
btnShowRelust.onclick = function(){
    textMainResult.value =  "width: " + cube.style.width + ';' +'\r\n'+ "height: " + cube.style.height + ';' +'\r\n'+ "border-radius: " + cube.style.borderRadius + ';';
};
btnCopyRelust.onclick = function(){
    var range = document.createRange();
    range.selectNode(textMainResult);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    textMainResult.value = '';
};

