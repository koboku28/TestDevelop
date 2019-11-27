https://github.com/koboku28/TestDevelop.git

https://koboku28.github.io/TestDevelop


1.「\Users\ユーザー名\」にディレクトリを作成
  $ mkdir sample
  $ cd sample

2.「git init」コマンドを使用してローカルリモートリポジトリを作成
　$ git init

3.ディレクトリ内にファイルを移動

4.「git add *」

5.「git commit --allow-empty -m "first commit"」

6.リモートリポジトリの設定
　$ git remote add origin https://github.com/koboku28/TestDevelop.git
　※確認する時　
　　$ git remote -v
　※削除する時
　　$ git remote rm origin

7.「$ git merge --allow-unrelated-histories origin/master」

8.「$ git push origin master」

9. [7]でエラーが出た場合
　$ git pull origin master
  再度 6→7
