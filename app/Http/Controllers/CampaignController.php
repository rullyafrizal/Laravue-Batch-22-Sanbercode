<?php

namespace App\Http\Controllers;

use App\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function index(){
        $campaigns = Campaign::paginate(6);

        $data['campaigns'] = $campaigns;

        return response()->json([
           'response_code' => '00',
           'response_message' => 'Data campaigns berhasil ditampilkan',
           'data' => $data
        ]);
    }

    public function random($count)
    {
        $campaigns = Campaign::select('*')->inRandomOrder()->limit($count)->get();

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Data campaign berhasil ditampilkan',
            'data' => $data
            ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'description' => 'required|min:50|max:1000',
            'image' => 'required|mimes:jpg,jpeg,png'
        ]);

        $campaign = Campaign::create([
            'title' => request('title'),
            'description' => request('description'),
        ]);

        if($request->hasFile('image'))
        {
            $img = $request->file('image');
            $img_ext = $img->getClientOriginalExtension();
            $img_name = $campaign->id . '.' . $img_ext;
            $img_folder = '/photos/campaign/';
            $img_location = $img_folder . $img_name;

            try{
                $img->move(public_path($img_folder), $img_name);
                $campaign->update([
                    'image' => $img_location
                ]);

            } catch (\Exception $e){
                $data['campaign'] = $campaign;
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Photo gagal diupload',
                    'data' => $data
                ]);
            }
        }
    }
}