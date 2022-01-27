class ReviewsController < ApplicationController 

    def create
        review = Review.new(review_params)

        if review.save 
            render json: review 
        else
            render json: { error: review.error.messages }, status: 422 
        end
    end

    def destroy
        review = Review.find_by(params[:id])
        
        if review.destroy 
            head :no_content 
        else
            render json: { error: review.errors.messages }, status: 422 
        end
    end

    private  
    
    def review_params
        params.require(:review).permit(:title, :score, :description, :pizza_id)
    end
end