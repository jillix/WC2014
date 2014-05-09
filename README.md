WC2014
======

Word Cup 2014

## How to use

Run `node index.js` and the matches will be printed as stringified JSON.
To save the output in a file run:

```sh
echo `node index` > matches.json
```

If you want to save the output in clipboard use this:

```sh
# linux
sudo apt-get install xclip
node index.js uglify | xclip -selection clipboard

# os x
node index.js uglify | pbcopy # NOT TESTED!
```

## Changelog

### `v0.1.0`
 - Initial release

## License
See the LICENSE file.
