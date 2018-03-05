# Juke

[Play it online here](https://giulianoconte.github.io/Juke/). I don't know what this game will be yet.

### Resources for this project

 + [p5.js](https://p5js.org/) is a JavaScript library for easy webpage graphics
 + [p5.play](http://p5play.molleindustria.org/) is a p5.js library for simple video game creation
 
### Tutorial on how to contribute

1. **Setup clone of the repository on your machine.** [(Simple guide)](http://rogerdudler.github.io/git-guide/) [(Thorough guide)](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
1. **Choose an editor.** I am using [VSCode](https://code.visualstudio.com/).
1. **Create a local server to host and work on during development.** Install latest version of [Python 3](https://www.python.org/downloads/). Double click "start_local_server.bat" to start the server. You can access it by navigating to `localhost:8000` in your browser. If you get the error "`'python' is not recognized as an internal or external command, operable program or batch file`" you probably need to [make sure Python is added to the PATH vairable](https://www.pythoncentral.io/add-python-to-path-python-is-not-recognized-as-an-internal-or-external-command/). If the batch file doesn't work for some reason you can start it manually: in your command line go to the project directory and enter `python -m http.server` for [Python 3](https://www.python.org/download/releases/3.0/)
1. **Disable browser caching.** Browser caching can really screw with development if you're not custom handling it. [Disable caching for Chrome](http://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development) or load the page in incognito mode (ctrl+shift+n).
1. **Run the sketch.** While your local server is running, you run the p5 sketch at `http://localhost:8000/` in your browser. You don't need to restart the server if you update files. You can also run the latest pushed version at [`https://giulianoconte.github.io/Juke/`](https://giulianoconte.github.io/Juke/). 
