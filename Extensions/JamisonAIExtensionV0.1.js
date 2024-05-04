
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  

  class Extension {
    getInfo() {
      return {
        "id": "jamisonai",
        "name": "JamisonAI",
        "color1": "#0088ff",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
blocks.push({
  opcode: "jamisonai_Block_JamisonAIPrompt",
  blockType: Scratch.BlockType.REPORTER,
  text: "JamisonAIPrompt",
  arguments: {

  },
  disableMonitor: false
});
Extension.prototype["jamisonai_Block_JamisonAIPrompt"] = function(args, util) {
  const localVars = {};
    return 'JamisonAI';
};



  Scratch.extensions.register(new Extension());
})(Scratch);
