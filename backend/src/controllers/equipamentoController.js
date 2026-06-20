const supabase = require('../config/supabaseClient');

// Listar todos os equipamentos
exports.listar = async (req, res) => {
  try {
    const { data, error } = await supabase.from('equipamentos').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Criar um novo equipamento
exports.criar = async (req, res) => {
  try {
    const { nome, setor } = req.body;
    const { data, error } = await supabase
      .from('equipamentos')
      .insert([{ nome, setor }])
      .select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
