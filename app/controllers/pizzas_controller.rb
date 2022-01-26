class PizzasController < ApplicationController 

    def index
        pizzas = Pizza.all

        render json: pizzas
    end 

    def show
        pizza = Pizza.find_by(params[:id])
    end

    def create
        pizza = Pizza.new(pizza_params)

        if pizza.save  
            render json: pizza
        else  
            render json: { error: pizza.errors.message }, status: 422
        end
    end

    def update
        pizza = Pizza.find_by(params[:id])

        if pizza.update(pizza_params)  
            render json: pizza
        else  
            render json: { error: pizza.errors.message }, status: 422
        end
    end

    def update
        pizza = Pizza.find_by(params[:id])

        if pizza.destroy
            head :no_content
        else  
            render json: { error: pizza.errors.message }, status: 422
        end
    end

    private  

    def pizza_params
        params.require(:pizza).permit(:name, :price, :description, :image_url)
    end
end