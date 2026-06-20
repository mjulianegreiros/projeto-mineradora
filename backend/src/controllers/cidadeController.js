const supabase = require('../config/supabaseClient');

// Listar todas as cidades
exports.listar = async (req, res) => {
  try {
    const { data, error } = await supabase.from('cidades').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Criar uma nova cidade
exports.criar = async (req, res) => {
  try {
    const { nome } = req.body;
    const { data, error } = await supabase
      .from('cidades')
      .insert([{ nome }])
      .select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
