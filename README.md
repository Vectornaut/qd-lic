# rreusser.github.io

Hi! Perhaps you're here because you found something interesting on my [sketches page](http://rreusser.github.io/sketches/). If so, don't fear! It's not completely impossible to run the code. Steps:

1. `git clone https://github.com/rreusser/rreusser.github.io.git` 
2. `cd rreusser.github.io/src`
3. `npm install` (fsevents might fail, but things seem to work?)
4. Now start a project in the `src/` subdirectory (that's `src/src` from the project root), e.g. `npm start clifford-torus`

First of all, why a `src` directory within `src`? Because I just wanted to deploy the master branch and not worry about a `docs` directory for github pages. TBH I don't totally remember the rationale and I kinda wonder if `docs/` was an option when I set this up becuase I feel like I should have definitely chosen that insetad.

Second, what actually happened here? I also want to maintain a site with a bunch of interconnected build and layout stuff, so when you type `npm start <project-name>`, it looks in `src/src` for a directory with that name. It detects the type of project by checking for 1) markdown, 2) [idyll](https://idyll-lang.org/), or 3) raw js. It runs a dev server or builds accordingly. *Each project is completely independent.* One page can't send you to another while developing. If you change the layout or any common code, you'd have to rebuild all the affected projects manually, one by one.  I've only had to do that once or twice though, so I'm pretty content with it.

Beyond that, I hope something here is useful or informative. I also hope the code is more or less clear, though it's definitely varying levels of cryptic at times since it's not my day job and since the goal here is to crank out visualizations and not so much to convey how it's done. If you're looking for code that's a bit more polished and has a bit more context and comments, you might try checking out my [projects page](http://rreusser.github.io/projects/) instead.

🚀

&copy; 2020 Ricky Reusser. MIT License.
