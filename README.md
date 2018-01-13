# ui-automation

**Resources**
- [Cucumberjs](https://github.com/cucumber/cucumber-js)
- [WebdriverIO](http://webdriver.io/)
- [Babel](https://github.com/babel/babel)
- [ESLint](https://eslint.org/docs/rules/)
- [Should.js](https://shouldjs.github.io/)

## macOS

#### Homebrew
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
$ brew doctor
Your system is ready to brew
```

### Node
```
$ brew install node
```

```
$ node --version
v6.3.1
```

### Git
```
$ brew install git
```

```
$ git --version
git version 2.9.2
```

### Java
Java is required for local execution
```
$ brew cask install java8
```

## Windows

### Scoop

**Requirements**
- [PowerShell 3](https://www.microsoft.com/en-us/download/details.aspx?id=34595) must be enabled for user account

```
set-executionpolicy unrestricted -s cu
```

Install
```
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

### Node
```
scoop install nodejs-lts
```

### Git
```
scoop install git
```

### Java
Not available via scoop

## Execution

#### Install dependencies
````
$ npm install
````

#### Local
````
$ npm test
````