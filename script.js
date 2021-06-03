//変数の定義
let canvas_column = 40;
let canvas_row = 40;
let pallet_color = "black";
let pallet_column = 12;


window.onload = function () {
  for (let y = 0; y < canvas_row; y += 1) {
    //値が0からcanvas_row（20）未満の19まで20回、yに＋1を実行し続ける
    input_y(y);
  }

  // パレットの表を作る
  let pallet_element = document.getElementById("pallet");
  let row_element, column_element;
  // パレットの表に1行分の tr を表す要素オブジェクトを追加する
  row_element = document.createElement("tr");
  pallet_element.appendChild(row_element);
  // パレットは1行分しかないので、forは1つだけで良い
  for (let x = 0; x < pallet_column; x += 1) {
    cell_element = document.createElement("td");
    cell_element.onclick = function () {
      // パレットのセルをクリックした時に、「パレットの列の番号」を
      // 引数としてこの関数を呼ぶ
      pallet_click(x);
    };
    // パレットの列の番号からパレットの色を計算する関数を呼び
    // その色でパレットの背景色を塗りつぶす。
    cell_element.style.backgroundColor = color_calc(x);
    row_element.appendChild(cell_element);
  }
};


function input_y(y) {
  let table_element = document.getElementById("canvas");
  let row_element, cell_element;

  row_element = document.createElement("tr");
  table_element.appendChild(row_element);

  for (let x = 0; x < canvas_column; x += 1) {
    //値が0からcanvas_column（20）未満の19まで20回、xに＋1を実行し続ける

    cell_element = document.createElement("td");


    // セルの上でマウスを移動した時の処理
    cell_element.onmousemove = function () {
      mouse_move(x, y);
    };
    // セルの上でマウスを押した時の処理
    cell_element.onmousedown = function () {
      mouse_move(x, y);
    };
    cell_element.id = `${x}_${y}`;
    row_element.appendChild(cell_element);
  }
}

// キャンバスの上でマウスを移動した時に実行される関数
function mouse_move(x, y) {
  let id = `${x}_${y}`;
  let move_element = document.getElementById(id);
  // マウスの左ボタンが押されているどうかを判定判定する
  if (event.buttons === 1) {
    // セルの背景色を、pallet_colorで塗りつぶす
    move_element.style.backgroundColor = pallet_color;
  }
}

function pallet_click(x) {
  pallet_color = color_calc(x);
  document.getElementById("select_color").style.backgroundColor = pallet_color;
}

// パレット列の番号を引数「x」で受け取り、対応する色を表す文字列を返す関数
function color_calc(x) {
  if (x === 0) {
    return 'white';
  }
  else if (x === 1) {
    return 'red';
  }
  else if (x === 2) {
    return 'pink';
  }
  else if (x === 3) {
    return 'orange';
  }
  else if (x === 4) {
    return 'yellow';
  }
  else if (x === 5) {
    return 'greenyellow';
  }
  else if (x === 6) {
    return 'green';
  }
  else if (x === 7) {
    return 'skyblue';
  }
  else if (x === 8) {
    return 'blue';
  }
  else if (x === 9) {
    return 'purple';
  }
  else if (x === 10) {
    return 'brown';
  }
  else {
    return 'black';
  }
}

let reload = document.getElementById('reload');
reload.addEventListener('click', function () {
  window.location.reload();
});