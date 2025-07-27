const axios = require("axios");

exports.translateText =async (req, res) => {
  const { text,source,target}=req.body;
  if (!text||!source||!target) {
    return res.status(400).json({
      status:"fail",
      message:"Please provide text, source language, and target language",
    });
  }
  try {
    const response=await axios({
      method:"post",
      url:"https://lt.vern.cc/translate",
      headers: { "Content-Type": "application/json" },
      data: {
        q: text,
        source,
        target,
        format: "text",
      },
    });
    return res.status(200).json({
      status: "success",
      translatedText: response.data.translatedText,
    });
  } catch (err) {
     return res.status(500).json({
      status: "error",
      message: "translation failed",
    });
  }
};
