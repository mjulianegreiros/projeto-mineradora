const supabase = require('../config/supabaseClient');

// Listar todos os serviços
exports.listar = async (req, res) => {
  try {
    const { data, error } = await supabase.from('servicos').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Criar um novo serviço
exports.criar = async (req, res) => {
  try {
    const { descricao, status } = req.body;
    const { data, error } = await supabase
      .from('servicos')
      .insert([{ descricao, status }])
      .select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
