# whitedogg13.github.io

## Static site

GitHub Pages publishes `main` → `/docs` at <https://whitedogg13.github.io/>.
The old Gatsby source is retained; publishing this static skeleton does not run
Gatsby or install npm dependencies. `docs/.nojekyll` preserves `.well-known`.

The only Customer App launch URL is
<https://whitedogg13.github.io/react-native-nfc-lock/customer/open/>. It opens or
foregrounds the app without choosing a screen or performing NFC work. When the
browser retains the link, the same URL serves installation and opening guidance.
No public store/download URL is assumed. Safari same-domain navigation and user
preferences can keep the page in a browser; no forced-open script is used.

Association files must remain at the domain root:

- `/.well-known/apple-app-site-association`: signed iOS application identifier
  `CN3C72UH9L.lockapp.reallocks.com`, with the one exact path in `components`.
- `/.well-known/assetlinks.json`: Android package `lockapp.reallocks.com` and the
  current distributed APK certificate fingerprint. The existing distribution
  uses the repository debug signing identity. When release signing or Play App
  Signing changes, verify the installed APK certificate and update this file;
  do not assume the upload certificate matches the Play signing certificate.

Android path scope is enforced in the app manifest; the Digital Asset Links
relation name does not imply that the app claims all paths.

### Preview and publish

Run `python3 -m http.server 8000 --directory docs` for a local preview. JSON
syntax can be checked with `python3 -m json.tool` on each association file.
Local server media types do not prove GitHub Pages media types.

After pushing a reviewed commit, verify the homepage, entry page and both
association URLs with HTTPS: HTTP 200, no redirects, the correct content and
media type. Check Apple CDN retrieval and the actual signed app identities.
Test natural Android domain verification and external Notes/Mail links on a
signed iPhone. Builds, simulator checks and forced package launches do not
substitute for physical-device association verification.

### Rollback

Before the first static deployment, Pages was disabled and the previous source
commit was `b53e00acb26e4fdd5b0effc8ac66af6a307491a4`. To undo this deployment,
disable Pages, then revert the static-site commit normally. Do not delete the
preserved Gatsby files or rewrite history. Later content changes can be rolled
back with a normal revert while retaining `main` → `/docs` publishing.
