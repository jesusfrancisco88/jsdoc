/*
  Copyright 2013 the JSDoc Authors.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
describe('@alias tag', () => {
  const docSet = jsdoc.getDocSetFromFile('test/fixtures/alias.js');
  // there are two doclets with longname myObject, we want the second one
  const myObject = docSet.getByLongname('myObject')[1];

  it('adds an "alias" property to the doclet with the tag\'s value', () => {
    expect(myObject.alias).toBe('myObject');
  });

  // further tests (ensuring alias has the proper effect): documentation/alias.js
});
