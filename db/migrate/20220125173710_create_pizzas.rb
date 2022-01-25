class CreatePizzas < ActiveRecord::Migration[6.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.string :image_url
      t.string :price
      t.string :description

      t.timestamps
    end
  end
end
