<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::get();
        return response()->json($product);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'sub_category_id' => 'required',
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        else
        {
            $product= new Product;
            $product -> sub_category_id = $request -> sub_category_id;
            $product -> name = $request -> name;
            $product -> price = $request -> price;
            $product -> description = $request -> description;
            $product -> image = $request -> image;


            if($request->hasFile('image'))
            {
                $file=$request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename= time() .'.' .$extension;
                $file->move(\public_path('Image'),$filename);
                $product->image =''.$filename;
            }

            $product -> save();
            return response()->json([
                'status'=>200,
                'messages'=>$product,
            ]);

        }


    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product -> name = $request -> name;
        $product -> price = $request -> price;
        $product -> description = $request -> description;
        $product -> sub_category_id = $request -> sub_category_id;
        $product -> update();
        return response()->json($product);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, $id)
    {
        $product = Product::find($id);
        $product -> delete();
        return response()->json($product);
    }
}
