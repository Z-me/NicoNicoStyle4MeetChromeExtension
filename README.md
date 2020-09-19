![image](https://user-images.githubusercontent.com/5908070/93610776-78b48400-fa08-11ea-9624-1e221b4d87ec.png)

この拡張機能はMeetのコメントをニコニコ動画風に表示するChoromeの拡張機能です。  
This extension is an extension of Chome that shows the comments of Meet as if they were Nico-Nico-Douga.

## Description
この拡張機能では、Google Meetのコメントをニコニコ動画のように表示できるようにします。
ポップアップではこの拡張機能の有効化ボタンや、各種設定が出来るようなっています。
キーワードを指定することで文字のサイズや色を変更します。

This extension allows you to display comments on Google Meet as if they were Nico Nico Douga.
The popup allows you to activate this extension and various settings.
You can change the size and color of the text by specifying keywords.


## Original Source
本拡張機能の元ネタは[Yeq6X](https://github.com/Yeq6X)氏の[NicoStyleMeet](https://github.com/Yeq6X/NicoStyleMeet)です。  
この場をお借りして、素晴らしいアイディアに感謝をいたします。

The original source of this extension was [NicoStyleMeet](https://github.com/Yeq6X/NicoStyleMeet) by [Yeq6X](https://github.com/Yeq6X).
I would like to take this opportunity to thank you for the great idea.

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Google Meetのチャットを某サイト風に流す拡張機能を公開しました。<a href="https://t.co/o8l39Crmgr">https://t.co/o8l39Crmgr</a> <a href="https://t.co/zsZpAproxj">pic.twitter.com/zsZpAproxj</a></p>&mdash; ろぬ (@Yeq6N) <a href="https://twitter.com/Yeq6N/status/1266381095177555969?ref_src=twsrc%5Etfw">May 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Demo
![DEMO](https://user-images.githubusercontent.com/5908070/93036418-c46ad480-f67a-11ea-841d-654451413c9a.gif)

## Usage
1. この拡張機能をGoogle Chromeにインストールし、![icon48](https://user-images.githubusercontent.com/5908070/93611855-c382cb80-fa09-11ea-8d3d-7a624a4494bd.png)このアイコンから`Activate`を選択することで、利用することができます。<br>You can use this extension by installing it on Google Chrome and selecting `Activate` from ![icon48](https://user-images.githubusercontent.com/5908070/93611855-c382cb80-fa09-11ea-8d3d-7a624a4494bd.png) this icon.
2. [Google Meet](https://meet.google.com/)から任意のMeetに参加し、メッセージスレッドを開く<br>Join any Meet from [Google Meet](https://meet.google.com/) and open a message thread
3. メッセージを送信したり受信すると[Demo](#Demo)のように表示されます。<br>When a message is sent or received, it will appear as [Demo](#Demo).
4. また、特殊なタグを入れることで、メッセージの色や大きさを変更することができます。<br>You can also change the color and size of the message by adding special tags.

### Tag List
#### Color Tags

| # | Tag | Result |
|:---:|:---|:---|
| 1 | デフォルト Default | ![image](https://user-images.githubusercontent.com/5908070/93615157-ffb82b00-fa0d-11ea-8b49-c5ef07672490.png) |
| 2 | `<#C:red>あかいろ Red` | ![image](https://user-images.githubusercontent.com/5908070/93615173-05157580-fa0e-11ea-9653-77f3822f6b5e.png) |
| 3 | `<#C:blue>あおいろ Blue` | ![image](https://user-images.githubusercontent.com/5908070/93615182-09419300-fa0e-11ea-9c79-1ea8c5b55462.png) |
| 4 | `<#C:green>みどりいろ Green` | ![image](https://user-images.githubusercontent.com/5908070/93615206-0d6db080-fa0e-11ea-93cb-94606a3e6495.png) |
| 5 | `<#C:orange>おれんじいろ Orange` | ![image](https://user-images.githubusercontent.com/5908070/93615219-1199ce00-fa0e-11ea-99c1-fd8dd8cbfc6d.png) |
| 6 | `<#C:purple>むらさきいろ Purple` | ![image](https://user-images.githubusercontent.com/5908070/93615232-165e8200-fa0e-11ea-90b0-a60603921936.png) |
| 7 | `<#C:black>くろいろ Black` | ![image](https://user-images.githubusercontent.com/5908070/93615269-22e2da80-fa0e-11ea-8377-479f1a766419.png) |

#### Size Tags
流れるコメントの大きさは画面の大きさによって変化します。
The size of the comments will change depending on the size of the screen.
タグを指定することで大きめの文字や小さめの文字を指定することができます。
You can specify larger or smaller characters by specifying tags.

| # | Tag | Result |
|:---:|:---|:---|
| 1 | デフォルト Default | ![image](https://user-images.githubusercontent.com/5908070/93661934-cd9edb80-fa96-11ea-9a91-9689a57514e1.png) |
| 2 | `<#S:l>おおきいもじ Large` | ![image](https://user-images.githubusercontent.com/5908070/93661962-0a6ad280-fa97-11ea-9cd4-b1697e6ebc4e.png) |
| 3 | `<#S:s>ちいさいもじ Small` | ![image](https://user-images.githubusercontent.com/5908070/93661943-d8f20700-fa96-11ea-92f8-8a9a5b7d1f23.png) |

## Licence

[MIT](https://github.com/Z-me/Meet4NicoNicoStyleChromeExtension/blob/master/LICENSE)

## Author

[Z-me](https://github.com/Z-me)
