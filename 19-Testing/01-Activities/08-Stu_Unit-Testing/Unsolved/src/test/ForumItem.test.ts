import ForumItem from '../classes/ForumItem.js';

describe('ForumItem', () => {
  // TODO: Add a comment describing this test.
  // Verify that an object created using the ForumItem
  // constructor is an instance of the ForumItem class.
  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem).toBeInstanceOf(ForumItem);
    });
  });


  // TODO: Add a comment describing this test.
  // This test checks whether the properties of a ForumItem instance
  // are correctly initialized when the class is instantiated with the 
  // given parameters. Here's a concise and descriptive comment:
  describe('Initialize', () => {
    it('should set properties properly', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.authorName).toBe(authorName);
      expect(forumItem.text).toBe(text);
      expect(forumItem.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  // This test verifies that the getMetaData() method of the ForumItem class 
  // returns a formatted string containing the author name and the creation date. 
  // Here's a descriptive comment:
  describe('getMetaData() method', () => {
    it('should return message with data', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';
      const expectedMetaData = `Created by ${authorName} on ${createdOn}`;

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.getMetaData()).toBe(expectedMetaData);
    });
  });
});
