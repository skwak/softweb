class HomeController < ApplicationController
  def index
    @input = Input.new
    @inputs = Input.all
  end

  def new
    @input = Input.new
  end

  def create
    @input = Input.new(input_params)
    if @input.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def input_params
    params.require(:input).permit(:content)
  end

end
