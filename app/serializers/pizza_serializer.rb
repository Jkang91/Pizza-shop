class PizzaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :price, :description

  has_many :reviews
end
