const supabase = require('../config/supabaseClient');

// Listar todos os funcionários
exports.listar = async (req, res) => {
  try {
    const { data, error } = await supabase.from('funcionarios').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Criar um novo funcionário
exports.criar = async (req, res) => {
  try {
    const { nome, cargo } = req.body;
    const { data, error } = await supabase
      .from('funcionarios')
      .insert([{ nome, cargo }])
      .select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
