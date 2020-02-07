describe("cipher.encode", () => {
  it("debería ser un objeto", () => {
    assert.equal(typeof cipher, "object");
  });

  describe("cipher.encode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      const result = "HIJKLMNOPQRSTUVWXYZABCDEFG";
      assert.equal(
        window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),
        result
      );
    });
  });

  describe("cipher.decode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      const result = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      assert.equal(
        window.cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33),
        result
      );
    });
  });
});
