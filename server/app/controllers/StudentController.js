const StudentController = {
  getList: async (req, res) => {
    await res.json({
      message: 'ok'
    })
  }
};

module.exports = StudentController;
