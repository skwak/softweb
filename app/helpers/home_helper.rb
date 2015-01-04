module HomeHelper

  def every_other_item(inputs)
    @selected = inputs.each_slice(2).map(&:last)
  end

  def get_other_items(selected)
    @outsiders = []
    @inputs.each do |input|
      @outsiders<< input if !selected.include?(input)
    end
  end

end
