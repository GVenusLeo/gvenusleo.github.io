# 02 - otf 转 ttf

在将一个开源字体移植到手机上时，遇到一个问题：手机主题仅支持 `ttf` 格式(TrueType Font)的字体文件，而我只有 `otf` 格式(OpenType Font)的文件。需要将 `otf` 格式转换为 `ttf`。

试了许多在线转换工具，效果都不佳，最后两行命名解决问题：

```shell
pip install otf2ttf
otf2ttf MyFont.otf
```
