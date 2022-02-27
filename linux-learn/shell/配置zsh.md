# 安装高亮插件
```shell
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

git clone git://github.com/zsh-users/zsh-syntax-highlighting $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

```

然后在`~/.zshrc`中添加
```shell
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```