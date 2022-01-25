class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :pizza_id
end
