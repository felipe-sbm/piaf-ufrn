class User
  include ActiveModel::Model

  attr_accessor :name, :email, :password

  validates :name, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }

  def save
    if valid?
      # Lógica para salvar o usuário no banco de dados
    end
  end

  def self.find(id)
    # Lógica para encontrar um usuário pelo ID
  end

  def self.all
    # Lógica para retornar todos os usuários
  end
end