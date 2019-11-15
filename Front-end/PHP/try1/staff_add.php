<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>スタッフ〜</title>
</head>

<body>
  <p>スタッフ追加</p>
  <br>

  <form method="post" action="staff_add_check.php">
    <p>スタッフの名前を入力してください</p>
    <input type="text" name="name" style="width:200px">
    <p>パスワードを入力してください_</p>
    <input type="password" name="pass" style="width:100px">
    <p>もう一度パスワードを入力してください_</p>
    <input type="password" name="pass2" style="width:100px">
    <br>
    <input type="button" onclick="history.back()" value="戻る">
    <input type="submit" value="OK">
  </form>
  
</body>
</html>